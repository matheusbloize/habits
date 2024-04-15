import Button from "@/components/Button";

const Home = () => {
  return (
    <main className="flex flex-col items-center gap-4 w-[90%] mx-auto">
      <section className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold lg:text-7xl ">Habits</h1>
        <p className="text-sm text-center lg:text-lg">
          Your favorite place to complete your daily habits quests. <br />
          Sign up and start creating your own habit heat maps!
        </p>
      </section>
      <section className="flex gap-4">
        <Button name="Log in" href="/login" />
        <Button name="Sign up" href="/signup" />
      </section>
    </main>
  );
};

export default Home;
