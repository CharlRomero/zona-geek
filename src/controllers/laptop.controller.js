import { pool } from "../db.js";

export const getLaptops = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT ITEM_ID, ITEM_NAME, BRAN_NAME, ITEM_PRICE, ITEM_IMG, ITEM_STOCK, LAP_WEIGHT FROM LAPTOP NATURAL JOIN ITEM NATURAL JOIN BRAND"
    );
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getLaptop = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT ITEM_ID, ITEM_NAME, BRAN_NAME, ITEM_PRICE, ITEM_IMG, ITEM_STOCK, LAP_WEIGHT FROM LAPTOP NATURAL JOIN ITEM NATURAL JOIN BRAND WHERE ITEM_ID = ?",
      [req.params.id]
    );

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Laptop not found",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
