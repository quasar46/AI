<?php
/**
 * The Header for our theme.
 *
 * @package OceanWP WordPress theme
 */

?>
<!DOCTYPE html>
<html class="<?php echo esc_attr( oceanwp_html_classes() ); ?>" <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body>
  <div class="wrapper">
    <header class="header">
      <div class="_container">
        <div class="header__wrap">
          <div class="header__top"><a class="header__logo" href=""><span>SSL</span><span>AI</span></a>
            <div class="header__menu"> <a class="header__menu-link" href="#services">Услуги </a><a
                class="header__menu-link" href="#about">О нас</a><a class="header__menu-link" href="#blog">Блог</a><a
                class="header__menu-link" href="#contacts">Контакты</a>
              <button class="btn header__btn">Призыв</button>
            </div>
            <div class="burger"></div>
          </div>
          <h1 class="header__title">Разработка искусственного интеллекта (AI) для вашего бизнеса и автоматизация бизнес
            процессов</h1>
          <div class="consult"> <img src="img/v1.svg" alt="">
            <p class="consult__text">Разрабатываем и внедряем системы искусственного интеллекта, нейронных сетей и
              машинного обучения с учетом требований вашего бизнеса</p>
            <button class="btn consult__btn">Получить консультацию</button>
          </div>
        </div>
      </div>
    </header>

				<?php do_action( 'ocean_page_header' ); ?>
