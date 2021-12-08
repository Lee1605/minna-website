<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'uwik6/hZpg4Ag755Gqht3quGVVf2bGENGawNMg86fVmxeWY4Ir/4IkL4ZcG49VDNHT/e2TITezNCKYr/FR6bQw==');
define('SECURE_AUTH_KEY',  'J9ZEu/2sbTzXsgwDaglhvPmaqeJv82vLAFQUqpYLO7NfaaCywCrpFIW9wZHKxVH9eoGzMapI5VFAVLxA+jVeaw==');
define('LOGGED_IN_KEY',    'mETUWKHIV6tJOPcak0qGYN6uJ22TT7XZcxPj4ZkSsUirG1Qk9W1VgNh4wzoSEeHmQNEsz+3/XPyxyaFfV6vzRg==');
define('NONCE_KEY',        '+8wcwU3hDJguW6AoZp5RExZm2ejx/Wn2KgaqJE1zO7eMzhgR9g7vArSNfVNUrNnyWf6KmI8ma5tZnZnJwqdthQ==');
define('AUTH_SALT',        '4w4xggMqyD4PaMx7FB/bzn3PykSYZjlg8QAyHeSb14T8R1x5J22vbgqDVwgzbP04Sd4DyyfYiNpXkc6Nxz6lkA==');
define('SECURE_AUTH_SALT', 'MWyKClxtgRTw71S7J2bCeQqjXgrquYUMq2iHmTva2gsczBCGvtjNZppTS0HQ7Mt5s5kZZUDYDd+xs1BUiH2R6g==');
define('LOGGED_IN_SALT',   'FEVeK5K7X6Qdq6AruB5fhD1mlwRBmTVfRHigpj65FuJge8cH3SsOSi9x/vhSuONHSynVS8Fm8Ayy6ECDyxcN1g==');
define('NONCE_SALT',       'J1t82E5MNhSpknh5vEeP/CjQ2KFsUKpWEnOZdOLLUL4H/e5kZjqhM3I/zaEt8VTd63WuRAVPQ9SaZB93ckYR1w==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
