const axios = require("axios");
const apiUrl =
  "http://tangjaikonlakan.dyndns.org:8080/demo/isapi.dll/datasnap/rest/v1";
axios.defaults.headers.common["api-key"] = "gihuFSYfpM8d3240k2ZS7J4z236g84";

exports.read = async (req, res) => {
  const device_id = req.params.device_id;
  try {
    const response = await axios
      .get(`${apiUrl}/devicelist/${device_id}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ message: "Record not found" });
  }
};

exports.list = async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/devicelist`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve records" });
  }
};
exports.create = async (req, res) => {
  try {
    const response = await axios.post(`${apiUrl}/Device`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to create record" });
  }
};
exports.update = async (req, res) => {
  const device_id = req.params.device_id;
  try {
    const response = await axios.put(
      `${apiUrl}/UpdateDevice/${device_id}`,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to update record" });
  }
};
exports.remove = async (req, res) => {
  try {
    const device_id = req.params.device_id;
    const response = await axios.delete(
      `${apiUrl}/UpdateDevice/${device_id}`,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete record" });
  }
};
