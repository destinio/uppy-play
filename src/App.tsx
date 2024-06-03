import "./App.css";
import Uppy from "@uppy/core";
import { FileInput } from "@uppy/react";
import { useState } from "react";
import GoldenRetriever from "@uppy/golden-retriever";
import ThumbnailGenerator from "@uppy/thumbnail-generator";

function App() {
  const [uppy] = useState(() =>
    new Uppy().use(GoldenRetriever).use(ThumbnailGenerator),
  );
  const [img, setImg] = useState<string | null>(null);

  console.log(uppy);

  uppy.on("file-added", (file) => {
    console.log("file-added", file);
    const fileData = uppy.getFile(file.id);

    const fileUrl = URL.createObjectURL(fileData.data);

    setImg(fileUrl);
  });

  //  console.log({ file, preview }),
  //  const fileData = uppy.getFile(file.id);
  //

  return (
    <>
      <h1>Uppy File Input</h1>
      <FileInput uppy={uppy} />
      {img && <img src={img} alt="preview" />}
    </>
  );
}

export default App;
