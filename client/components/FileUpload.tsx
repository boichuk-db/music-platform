import { ChangeEvent, FC, useRef } from "react";

interface FileUploadProps {
  setFile: Function;
  accept: string;
  type: "image" | "audio";
}

const FileUpload: FC<FileUploadProps> = ({ setFile, accept, children }) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files !== null) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type="file"
        accept={accept}
        style={{ display: "none" }}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default FileUpload;
