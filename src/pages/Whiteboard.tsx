import { Excalidraw, WelcomeScreen } from "@excalidraw/excalidraw";
import { useState } from "react";
import type { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types.d.ts";
const Whiteboard = () => {
  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(null);

  const UIOptions = {
    canvasActions: {
      loadScene: false,
    },
    tools: { image: true },
  };

  return (
    <div>
      <h1>Whiteboard</h1>
      <button
        type="button"
        onClick={() => {
          if (!excalidrawAPI) {
            return;
          }
          const elements = excalidrawAPI.getSceneElements();
          excalidrawAPI.scrollToContent(elements[0], {
            fitToViewport: true,
          });
        }}
      >
        Fit to viewport, first element
      </button>
      <hr />
      <div style={{ height: "500px" }}>
        <Excalidraw
          UIOptions={UIOptions}
          excalidrawAPI={(api: ExcalidrawImperativeAPI) =>
            setExcalidrawAPI(api)
          }
        >
          <WelcomeScreen />
        </Excalidraw>
      </div>
    </div>
  );
};

export default Whiteboard;
