import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center  ">
      <div className="max-w-prose mx-auto">
        <img
          src="../../images/elin.png"
          alt="a pic of elin"
          className="w-64 h-64 mx-auto mt-10"
        ></img>
        <h1 className=" text-center font-bold text-2xl mt-5">Hi, I'm Elin</h1>
        <p className=" text-center">
          I'm a 1st year master student in Interactive Media Technology at KTH
          in Stockholm.
        </p>
        <p className=" text-center">
          This blog is dedicated to documenting the progress of my work in the{" "}
          <a
            className=" underline"
            href="https://www.kth.se/student/kurser/kurs/DH2650?l=en"
          >
            Computer Game Design Course DH2650
          </a>{" "}
          I'm currently taking. Welcome!
        </p>
        <Posts></Posts>
      </div>
    </main>
  );
}
