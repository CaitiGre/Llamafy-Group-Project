const pool = require('../database/pool');

async function fetchUserFirstName(email) {
    console.log(email)
    const conn = await pool.getConnection();
  try {
    const result = await conn.query(
      `select distinct firstName from Users where email = ?`, email,
    );
    return result[0][0].firstName;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    conn.release();
  }
}

async function saveFavourite(imgUrl, userEmail) {
  try {
    const imgRes = await axios.get(imgUrl, {responseType: 'stream'});
    const id = uuidv4()
    const file = fs.createWriteStream(`public/${uuidv4()}.png`);
    imgRes.data.pipe(file);
  } catch (err) {
    console.log("Image could not be saved to the server");
    console.log(err);
  }
}
module.exports = { fetchUserFirstName };