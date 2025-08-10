import AlertButton from "./AlertButton";

export default function Toolbar() {
  const buttons = [
    { message: "Downloading!", children: "Download File" },
    { message: "Sharing!", children: "Share Document" },
    { message: "Uploading!", children: "Upload File" },
  ];

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {buttons.map((btn, index) => (
        <AlertButton
          key={index}
          message={btn.message}
        >
          {btn.children}
        </AlertButton>
      ))}
    </div>
  );
}
