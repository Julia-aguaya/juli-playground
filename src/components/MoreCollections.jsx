import { useState } from "react";

function MoreCollections() {
  const [openCollection, setOpenCollection] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const collections = [
    {
      id: "jardin",
      name: "Garden",
      preview: "/images/xp/collections/jardin/limon.png",
      images: [
        { name: "Blue flowers", file: "flor-azul.png" },
        { name: "Lemon tree", file: "limon.png" },
        { name: "Pink petals", file: "petalos.png" },
        { name: "Flower study", file: "flor.png" },
        { name: "Orchids", file: "flores.png" },
        { name: "Wildflower bouquet", file: "ramo.png" },
      ],
    },
    {
      id: "personajes",
      name: "Characters & stories",
      preview: "/images/xp/collections/personajes/gatitos.png",
      images: [
        { name: "Cloud cats", file: "gatitos.png" },
        { name: "Little rabbit", file: "conejo.png" },
        { name: "Zelda", file: "zelda.png" },
        { name: "Portrait", file: "l.png" },
        { name: "Cuphead", file: "cuphead.png" },
      ],
    },
    {
      id: "curiosidades",
      name: "Curiosities",
      preview: "/images/xp/collections/curiosidades/mariposa.png",
      images: [
        { name: "Under the sea", file: "mar.png" },
        { name: "Moth", file: "mariposa.png" },
        { name: "Tiny aquarium", file: "acuario.png" },
        { name: "Autumn leaves", file: "hojas.png" },
        { name: "Fish & sneaker", file: "peskado.png" },
      ],
    },
  ];

  const activeCollection = collections.find(
    (collection) => collection.id === openCollection
  );

  return (
    <section className="more_collections">
      <div className="more_collections_heading">
        <p>03 — MORE WATERCOLORS</p>
        <h2>More collections</h2>
      </div>

      <div className="xp_desktop">
        {collections.map((collection) => (
          <button
            className="xp_folder"
            key={collection.id}
            type="button"
            onClick={() => {
              setOpenCollection(collection.id);
              setSelectedImage(null);
            }}
          >
            <span className="xp_folder_icon">
              <img
                className="xp_folder_preview"
                src={collection.preview}
                alt=""
              />

              <img
                className="xp_folder_image"
                src="/images/xp/Folder.webp"
                alt=""
              />
            </span>

            <span className="xp_folder_name">
              {collection.name}
            </span>
          </button>
        ))}

        {activeCollection && (
          <div className="xp_window">
            <div className="xp_window_bar">
              <span className="xp_window_title">
                {activeCollection.name} — My watercolors
              </span>

              <button
                className="xp_window_close"
                type="button"
                onClick={() => {
                  setOpenCollection(null);
                  setSelectedImage(null);
                }}
                aria-label="Close collection"
              >
                ×
              </button>
            </div>

            <div className="xp_window_content">
              {activeCollection.images.map((image) => {
                const src = `/images/xp/collections/${activeCollection.id}/${image.file}`;

                return (
                  <button
                    className="xp_file"
                    type="button"
                    key={image.file}
                    onClick={() => setSelectedImage({ ...image, src })}
                  >
                    <span className="xp_file_thumbnail">
                      <img src={src} alt={image.name} />
                    </span>

                    <span className="xp_file_name">{image.name}</span>
                  </button>
                );
              })}
            </div>

            {selectedImage && (
              <div
                className="xp_image_viewer"
                onClick={() => setSelectedImage(null)}
              >
                <div
                  className="xp_image_viewer_panel"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    className="xp_image_viewer_close"
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    aria-label="Close enlarged image"
                  >
                    ×
                  </button>

                  <img src={selectedImage.src} alt={selectedImage.name} />
                  <p>{selectedImage.name}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <footer className="xp_taskbar">
        <span className="xp_taskbar_start">Start</span>
        <span className="xp_taskbar_prompt">Let&apos;s make something together</span>

        <div className="xp_taskbar_links">
          <a href="mailto:juliaguaya02@gmail.com">
            juliaguaya02@gmail.com
          </a>
          <a
            href="https://github.com/Julia-aguaya"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/julia-aguaya/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </section>
  );
}

export default MoreCollections;
