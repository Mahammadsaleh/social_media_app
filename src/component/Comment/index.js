function Comment() {
  const [img, setImg] = useState("");

  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const handleClick = () => {
    // 👇 "inputRef.current.value" is input value
    setInput(inputRef.current.value);
    inputRef.current.value = "";
  };

  useEffect(() => {
    if (input != "") {
        //comment
      post({
        content: input,
        date: Date.now(),
        author: "-NVBCF_otC_hB1_HqB7C",
        image: img,
      });
    }
  }, [input]);

  return (
    <div className={style.main}>
      <div className={style.tweet}>
        <AddProfilePhoto />
        <div className={style.tweetBody}>
          <div className={style.tweetInfo}>
            <input
              ref={inputRef}
              type="text"
              className={style.tweetInput}
              placeholder="Write your tweet"
            />
          </div>
          <div className={style.tweetFooter}>
            <button onClick={handleClick} className={style.submitButton}>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
