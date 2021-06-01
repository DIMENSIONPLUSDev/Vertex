import { useQuery } from "react-query";
import axios from "axios";

const getTrainings = () => {
  return axios.get("https://training.discoverbim.in/api/v4/profile/721224015/upcomingSessions.json");
};

export default function useTraining() {
  return useQuery("trainings", getTrainings);
}
