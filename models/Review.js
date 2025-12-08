const { pool } = require('../config/database');

class Review {
  // 리뷰 작성
  static async create(movie_id, user_id, rating, comment) {
    try {
      const [result] = await pool.execute(
        'INSERT INTO reviews (movie_id, user_id, rating, comment) VALUES (?, ?, ?, ?)',
        [movie_id, user_id, rating, comment]
      );

      return {
        review_id: result.insertId,
        movie_id,
        user_id,
        rating,
        comment
      };
    } catch (error) {
      throw error;
    }
  }

  // 특정 영화의 리뷰 조회 (사용자 정보 포함)
  static async findByMovieId(movie_id) {
    try {
      const [rows] = await pool.execute(
        `SELECT
          r.review_id,
          r.movie_id,
          r.user_id,
          r.rating,
          r.comment,
          r.created_at,
          u.username,
          u.email
        FROM reviews r
        INNER JOIN users u ON r.user_id = u.user_id
        WHERE r.movie_id = ?
        ORDER BY r.created_at DESC`,
        [movie_id]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  // 특정 사용자의 리뷰 조회
  static async findByUserId(user_id) {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM reviews WHERE user_id = ? ORDER BY created_at DESC',
        [user_id]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  // 리뷰 삭제
  static async delete(review_id, user_id) {
    try {
      const [result] = await pool.execute(
        'DELETE FROM reviews WHERE review_id = ? AND user_id = ?',
        [review_id, user_id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Review;