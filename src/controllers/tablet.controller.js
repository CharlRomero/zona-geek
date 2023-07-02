import { pool } from "../db.js";

export const getTablets = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM TABLET NATURAL JOIN ITEM");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getTablet = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM TABLET NATURAL JOIN ITEM WHERE ITEM_ID = ?",
      [req.params.id]
    );

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Tablet not found",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
