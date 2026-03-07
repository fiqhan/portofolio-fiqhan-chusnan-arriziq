"use client";

import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "dart",
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <motion.div
      className="code-block"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="code-header">
        <div className="flex gap-1.5">
          <span className="code-dot red" />
          <span className="code-dot yellow" />
          <span className="code-dot green" />
        </div>
        {filename && (
          <span className="ml-4 text-xs text-slate-400 font-mono">
            {filename}
          </span>
        )}
        <div className="ml-auto">
          <button
            onClick={copyToClipboard}
            className="p-1.5 rounded hover:bg-slate-700 transition-colors"
            title="Copy code"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-slate-400" />
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="code-content">
        <pre className="text-sm">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              {showLineNumbers && (
                <span className="select-none text-slate-600 w-8 text-right mr-4">
                  {index + 1}
                </span>
              )}
              <code
                dangerouslySetInnerHTML={{
                  __html: highlightSyntax(line, language),
                }}
              />
            </div>
          ))}
        </pre>
      </div>
    </motion.div>
  );
}

// Simple syntax highlighting for Flutter/Dart code
function highlightSyntax(line: string, language: string): string {
  if (language === "dart" || language === "flutter") {
    // Keywords
    line = line.replace(
      /\b(class|import|export|const|final|var|void|return|if|else|for|while|do|switch|case|break|continue|new|this|super|extends|implements|with|mixin|on|show|hide|async|await|future|stream|Widget|StatelessWidget|StatefulWidget|State|BuildContext|initState|build|dispose|setState)\b/g,
      '<span class="text-purple-400">$1</span>',
    );

    // Types
    line = line.replace(
      /\b(String|int|double|bool|dynamic|List|Map|Set|Object|Widget|Color|EdgeInsets|BoxDecoration|BorderRadius|Column|Row|Container|Text|Icon|AssetImage|NetworkImage|Future|Stream)\b/g,
      '<span class="text-green-400">$1</span>',
    );

    // Strings
    line = line.replace(
      /(['"`])(?:(?!\1)[^\\]|\\.)*\1/g,
      '<span class="text-amber-300">$&</span>',
    );

    // Numbers
    line = line.replace(
      /\b(\d+\.?\d*)\b/g,
      '<span class="text-orange-400">$1</span>',
    );

    // Comments
    line = line.replace(/(\/\/.*$)/g, '<span class="text-slate-500">$1</span>');

    // Annotations
    line = line.replace(/(@\w+)/g, '<span class="text-cyan-400">$1</span>');
  }

  return line;
}
