import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { TbCloudUpload } from "react-icons/tb";

const defaultAcceptedFiles = {
  "image/*": [".png", ".gif", ".jpeg", ".jpg"],
};

const FileUploader = (props) => {
  const { className, accept = defaultAcceptedFiles, multiple = false } = props;

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      multiple,
      accept,
    });

  return (
    <div
      {...getRootProps()}
      className={`cursor-pointer h-[200px] w-full bg-sorrell-brown rounded-[20px] flex items-center justify-center ${className}`}
    >
      <input {...getInputProps()} />
      <div className="max-w-[300px] px-3">
        <div className="w-[70px] h-[70px] bg-indian-khaki rounded-full p-[9px] mx-auto mb-4">
          <div className="w-full h-full bg-sandrift rounded-full flex items-center justify-center">
            <TbCloudUpload color="white" size={30} />
          </div>
        </div>
        <p className="leading-[24px] text-center text-white">
          <span className="font-bold">Click to upload</span> or drag and drop
        </p>
        <p className="text-white leading-[24px] text-center">
          SVG, PNG, or JPG
        </p>
      </div>
    </div>
  );
};

export default FileUploader;
