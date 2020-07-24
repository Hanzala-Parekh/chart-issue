import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  return (
    <div className={styles.container} style={{ margin: "0 auto 0 auto", width: "80%" }}>
      {dailyData.length && (
        <Line
          data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [
              {
                data: dailyData.map(({ confirmed }) => confirmed),
                labels: "Infected",
                borderColor: "#3333ff",
                fill: true,
              },
              {
                data: dailyData.map(({ deaths }) => deaths),
                labels: "Deaths",
                borderColor: "red",
                backgroudColor: "rgba(255, 0, 0, 0.5)",
                fill: true,
              },
            ],
          }}
        />
      )}
    </div>
  );
};

export default Chart;
