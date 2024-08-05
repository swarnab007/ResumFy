import { Button } from "@/components/ui/button";
import { ResumeContext } from "../context/resumeContext.jsx";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  Editor,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { AIchatSession } from "../../services/AiModel.js";
import toast from "react-hot-toast";

const PROMPT =
  "position title: {jobTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experience level and No JSON array) , give me result in HTML tags";

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  const { resumeInfo, setResumeInfo } = useContext(ResumeContext);
  const [loading, setLoading] = useState(false);

  const GenerateSummeryFromAI = async () => {
    if (!resumeInfo?.Experience[index]?.title) {
      toast("Please Add Position Title");
      return;
    }
    setLoading(true);
    const prompt = PROMPT.replace(
      "{jobTitle}",
      resumeInfo.Experience[index].title
    );

    const result = await AIchatSession.sendMessage(prompt);
    const resp = await result.response.text();
    // Ensure HTML is clean and correctly formatted
    const cleanHtml = resp.replace("[", "").replace("]", "").trim();
    setValue(cleanHtml);
    setLoading(false);
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <label className="text-xs">Summary</label>
        <Button
          variant="outline"
          size="sm"
          onClick={GenerateSummeryFromAI}
          disabled={loading}
          className="flex gap-2 border-primary text-primary"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Brain className="h-4 w-4" /> Generate from AI
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={String(value)}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
