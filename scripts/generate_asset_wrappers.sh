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
      yarn webpconvert $(realpath $file)
      directories+=( ${file#"$1/"} )
      generate_index $file
    fi
  done

  if [ ${#images[@]} -eq 0 ] && [ ${#directories[@]} -eq 0 ]; then
    return
  fi

  local imports=()
  local exports=()
  for image in "${images[@]}"; do
    local name=${image%".png"}
    name=$(echo $name | sed -E 's/_(.)/\U\1/g')
    name=${name^}
    imports+=( "import _$name from './$image';" )
    imports+=( "import _${name}_webp from './$image.webp';" )
    exports+=( "export const $name = { png: _$name, webp: _${name}_webp };")
  done

  for directory in "${directories[@]}"; do
    exports+=( "export * as $directory from './$directory';" )
  done

  local export_string=""
  imports+=( "${exports[@]}" )
  printf -v export_string "%s\n" "${imports[@]}"

  cat << EOF > $1/index.ts
/**
 * This file is generated
 * To update it, run \`yarn run update-codegen\`
 */

$export_string
EOF

  truncate -s -1 "$1/index.ts"
}

for file in $SRC_DIR/assets/*; do
  if [ -d $file ]; then
    generate_index $file
  fi
done