import ReactMarkdown from "react-markdown";

const Markdown = (props) => {
  const { content = "", components = {} } = props;

  return (
    <ReactMarkdown
      components={{
        p: (props) => <p {...props} className="text-base leading-normal" />,
        a: (props) => <a {...props} className="text-primary" />,
        ...components,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
