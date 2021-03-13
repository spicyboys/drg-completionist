export default function BuyMeACoffee() {
  return (
    <div style={{ textAlign: 'center' }}>
      <a
        href="https://www.buymeacoffee.com/robort"
        rel="noreferrer noopener"
        target="_blank"
        onClick={() => {
          gtag('event', 'page_view', {
            page_location: 'https://www.buymeacoffee.com/robort',
            page_title: 'Buy me a Glyphid Slammer',
          });
        }}
      >
        <img
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a Glyphid Slammer&emoji=🍺&slug=robort&button_colour=FFDD00&font_colour=111111&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
          alt="Because coffee is for pointy-eared leaf-lovers."
          style={{ height: 'auto', width: 'auto' }}
        />
      </a>
    </div>
  );
}
