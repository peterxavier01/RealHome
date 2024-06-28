import { useState, useEffect, useCallback } from "react";
import { Marked } from "marked";
import dompurify from "dompurify";

const useParsedMarkedDown = (markdown: string) => {
  const [sanitizedContent, setSanitizedContent] = useState("");

  const getSanitizedContent = useCallback(async () => {
    const marked = new Marked();
    const parsedContent = await marked.parse(markdown ?? "");

    return dompurify.sanitize(parsedContent);
  }, [markdown]);

  useEffect(() => {
    const fetchSanitizedContent = async () => {
      const content = await getSanitizedContent();
      setSanitizedContent(content);
    };

    fetchSanitizedContent();
  }, [markdown, getSanitizedContent]);

  return sanitizedContent;
};

export default useParsedMarkedDown;
