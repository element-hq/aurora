import type React from "react";
import { useState } from "react";
import TimelineStore from "./TimelineStore";

export interface ComposerProps {
    timelineStore: TimelineStore;
}

export const Composer: React.FC<ComposerProps> = ({ timelineStore }) => {
    const [composer, setComposer] = useState("");

    return (
        <div className="mx_Composer">
            <div className="mx_Composer_wrapper">
                <textarea
                    id="mx_Composer_textarea"
                    placeholder="Send a message"
                    rows={1}
                    value={composer}
                    onChange={(e) => setComposer(e.currentTarget.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && composer) {
                            timelineStore.sendMessage(composer);
                            setComposer("");
                            e.preventDefault();
                        }
                    }}
                ></textarea>
                {/* <button
                    id="mx_Composer_send"
                    onClick={() => {
                        if (composer) {
                            timelineStore.sendMessage(composer);
                            setComposer("");
                        }
                    }}
                >
                    Send
                </button> */}
            </div>
        </div>
    );
};
