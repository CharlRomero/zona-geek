import { pool } from "../db.js";

export const getItems = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM item");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getItem = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM item WHERE item_id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Item not found",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const updateItem = async (req, res) => {
  try {
    const id = req.params.id;

    const [result] = await pool.query(
      "UPDATE item SET item_stock = item_stock - 1 WHERE item_id = ?;",
      [id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Item not found",
      });

    const [rows] = await pool.await("SELECT * FROM item WHERE item_id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
