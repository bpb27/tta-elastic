export const EmbeddedTruth = ({ id, onError }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const adjustHeight = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height =
          iframeRef.current.contentWindow.document.body.scrollHeight + 'px';
      }
    };

    const intervalId = setInterval(adjustHeight, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={`https://truthsocial.com/@realDonaldTrump/${id}/embed`}
      style={{ border: '1px solid gray' }}
      width="100%"
      allowFullScreen="allowfullscreen"
      onError={onError}
    />
  );
};
