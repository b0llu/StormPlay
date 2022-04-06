import { Loader, VideoCard } from "Components";
import { useReducerContext } from "Context";
import { useHistoryContext } from "Context/History.context";
import "./HistoryPage.css";

export const HistoryPage = () => {
  const { history, loading } = useReducerContext();
  const { removeHistory } = useHistoryContext();

  return (
    <section>
      <div className="history-page-header">
        {history.length === 0 ? (
          <h1>You have Not Watched Any Videos Yet</h1>
        ) : (
          <h1>Your History</h1>
        )}
      </div>
      {history.length !== 0 && (
        <div className="clear-btn">
          <button onClick={removeHistory}>Clear All</button>
        </div>
      )}
      <div className="history-page-container">
        {loading ? (
          <Loader />
        ) : (
          history.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })
        )}
      </div>
    </section>
  );
};
