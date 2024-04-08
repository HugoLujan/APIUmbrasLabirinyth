import Times from "../Models/Times.js";

export const getTimes = async (req, res) => {
  try {
    const times = await Times.find();
    res.send(times);
  } catch (error) {
    return res.status(400).json({ message: "Something wrong!" });
  }
};

export const insertTime = async (req, res) => {
    const { time: timeValue } = req.body;
    try {
        const newTime = new Times({
          Time: timeValue
        });
        await newTime.save();
        return res.json(newTime);
    } catch (error) {
        return res.status(500).json({ message: 'Error al insertar el tiempo', error: error.message });
    }
};
