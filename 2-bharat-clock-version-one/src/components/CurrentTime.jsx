function CurrentTime() {
  let time = new Date();
  let options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString("en-GB", options)} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
