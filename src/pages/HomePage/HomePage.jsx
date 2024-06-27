const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <div>
          <title>Calculate your daily calorie intake right now</title>
          <form>
            <div>
              <label>
                Height*
                <input type="number" />
              </label>
              <label>
                Desired Weight*
                <input type="number" />
              </label>
            </div>
            <div>
              <label>
                Age*
                <input type="number" />
              </label>
              <label>
                Blood type*
                <input type="radio" />
              </label>
            </div>
            <label>
              Current weight*
              <input type="number" />
            </label>
            <button>Start losing weight</button>
          </form>
        </div>
      </Helmet>
    </HelmetProvider>
  );
};

export default HomePage;
