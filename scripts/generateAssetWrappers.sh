#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
SRC_DIR="$DIR/../src"

function generate_index {
  local images=()
  local directories=()
  for file in $1/*; do
    if [[ $file == *.png ]]; then
      images+=( ${file#"$1/"} )
    elif [ -d $file ]; then
      directories+=( ${file#"$1/"} )
      generate_index $file
    fi
  done

  if [ ${#images[@]} -eq 0 ] && [ ${#directories[@]} -eq 0 ]; then
    return
  fi

  local imports=()
  for image in "${images[@]}"; do
    local name=${image%".png"}
    name=$(echo $name | sed -E 's/_(.)/\U\1/g')
    name=${name^}
    imports+=( "export { default as $name } from \"./$image\";" )
  done

  for directory in "${directories[@]}"; do
    imports+=( "export * as $directory from \"./$directory\";" )
  done

  local import_string=""
  printf -v import_string "%s\n" "${imports[@]}"

  cat << EOF > $1/index.ts
/**
 * This file is generated
 * To update it, run \`yarn run update-codegen\`
 */

$import_string
EOF
}

for file in $SRC_DIR/assets/*; do
  if [ -d $file ]; then
    generate_index $file
  fi
done