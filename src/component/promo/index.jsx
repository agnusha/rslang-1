/* eslint-disable max-len */
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import './styles.scss';

const Promo = () => (
  <div className="container">
    <section className="game">
      <div className="game-card">
        <div className="meta">
          <div className="game-card_photo speakit"></div>
          <div className="details">
          </div>
        </div>
        <div className="description">
          <h1>SpeakIt</h1>
          <h2>Приложение для проверки произношения</h2>
          <div className="list-div">
            <ul>
              <li>Слова выводятся на страницу группами по 10 слов. Возле каждого слова отображается транскрипция и иконка аудио.</li>
              <li>При клике по слову звучит его произношение, выводятся картинка и перевод.</li>
              <li>Произнесённые пользователем слова распознаются и отображаются в текстовом виде. Проверка правильности произношения происходит путём сравнения распознанного текста с написанием слова.</li>
            </ul>
          </div>
          <div className="read-more">
            <Nav.Link as={Link} to="/game/speakit" className="game-link">Играть</Nav.Link>
          </div>
        </div>
      </div>

      <div className="game-card alt">
        <div className="meta">
          <div className="game-card_photo english-puzzle"></div>
          <div className="details">
          </div>
        </div>
        <div className="description">
          <h1>English puzzle</h1>
          <h2>Цель - собрать предложения из слов в случайном порядке</h2>
          <div className="list-div">
            <ul>
              <li>В случайном порядке размещаются карточки со словами, из которых можно собрать предложение.</li>
              <li>В игре 6 уровней сложности по количеству частей коллекции исходных данных, в каждом уровне 60 раундов по 10 предложений в каждом.</li>
              <li>На странице статистики отображаются все предложения раунда.</li>
            </ul>
          </div>
          <div className="read-more">
            <Nav.Link as={Link} to="/english-puzzle" className="game-link">Играть</Nav.Link>
          </div>
        </div>
      </div>

      <div className="game-card">
        <div className="meta">
          <div className="game-card_photo savanna"></div>
          <div className="details">
          </div>
        </div>
        <div className="description">
          <h1>Саванна</h1>
          <h2>Тренировка развивает словарный запас</h2>
          <div className="list-div">
            <ul>
              <li>Чем больше слов ты знаешь, тем больше очков опыта получишь.</li>
              <li>На экране пользователю показывается загадываемое слово и 4 варианта перевода.</li>
              <li>Пользователь должен выбрать правильный по его мнению вариант перевода при помощи мыши или клавиш 1-4.</li>
            </ul>
          </div>
          <div className="read-more">
            <Nav.Link as={Link} to="/savanna" className="game-link">Играть</Nav.Link>
          </div>
        </div>
      </div>

      <div className="game-card alt">
        <div className="meta">
          <div className="game-card_photo audio-challenge"></div>
          <div className="details">
          </div>
        </div>
        <div className="description">
          <h1>Аудиовызов</h1>
          <h2>Цель - выбрать перевод слова по звучащему произношению.</h2>
          <div className="list-div">
            <ul>
              <li>В процессе игры звучит произношение слова на английском языке, нужно выбрать перевод слова из пяти предложенных вариантов ответа.</li>
              <li>Слова можно угадывать, выбирая их как кликами мышкой, так и нажатием кнопок клавиатуры.</li>
              <li>Переводы слов, из которых выбирается нужный, относятся к одной части речи и имеют схожее написание.</li>
            </ul>
          </div>
          <div className="read-more">
            <Nav.Link as={Link} to="/audioChallenge" className="game-link">Играть</Nav.Link>
          </div>
        </div>
      </div>

      <div className="game-card">
        <div className="meta">
          <div className="game-card_photo sprint"></div>
          <div className="details">
          </div>
        </div>
        <div className="description">
          <h1>Спринт</h1>
          <h2>Тренировка скорости и правильности перевода</h2>
          <div className="list-div">
            <ul>
              <li>Ход игры: пользователь видит слово на английском языке и перевод слова, нужно указать принадлежит ли данный перевод этому слову.</li>
              <li>Продолжительность раунда - 1 минута.</li>
              <li>Слова можно угадывать выбирая их как кликами мышкой, так и нажатием стрелок на клавиатуре.</li>
            </ul>
          </div>
          <div className="read-more">
            <Nav.Link as={Link} to="/sprint" className="game-link">Играть</Nav.Link>
          </div>
        </div>
      </div>

      <div className="game-card alt">
        <div className="meta">
          <div className="game-card_photo own"></div>
          <div className="details">
          </div>
        </div>
        <div className="description">
          <h1>Своя игра</h1>
          <h2>Не реализовано</h2>
          <div className="list-div">
            <ul>
              <li>Планируется разработка.</li>
            </ul>
          </div>
          <div className="read-more">
          </div>
        </div>
      </div>
    </section>

    <section className="info">
      <article>
        <h2>Особенности приложения</h2>
        <ul className="green-list">
          <li>большое количество настроек, благодаря которым пользователь может изменять внешний вид и некоторые детали работы приложения в соответствии с собственными предпочтениями</li>
          <li>для заучивания иностранных слов используется методика интервального повторения</li>
          <li>собирается и предоставляется пользователю статистика изучения слов, как краткосрочная – по результатам каждой тренировки, так и долгосрочная – за весь период обучения</li>
          <li>для отслеживания прогресса и геймификации обучения используются мини-игры</li>
        </ul>
      </article>
      <article>
        <h2>Преимущества приложения</h2>
        <ul className="green-list">
          <li>
            отлично подойдет для самостоятельных занятий по индивидуальным рекомендациям,
            упражняться в чтении и аудировании, учить фразы и слова, практиковаться в грамматике
          </li>
          <li>метод интервального повторения заметно сокращает время тренировки, но качество занятия заметно возрастает</li>
          <li>сайт позволяет сохранять все в личный словарик, к которому можно возвращаться в любой момент</li>
          <li>эффективные тренировки</li>
          <li>карточки со словами помимо общей информации о слове предоставляют транскрипцию, описание, примеры употребления в разных контекстах</li>
          <li>выбор уровня сложности позволяет настроить режим работы под конкретного пользователя</li>
          <li>сколько времени выделить на учебу решаете вы сами</li>
          <li>настройки позволяют сделать приложение гибким под любого пользователя</li>
          <li>возможность расширения словарного запаса</li>
          <li>удобный и интуитивно понятный интерфейс</li>
          <li>единый стиль оформления</li>
        </ul>
      </article>
      <article>
        <h2>Правила для определения интервала</h2>
        <ul className="green-list">
          <li>Интервальные повторения — это простой, но очень действенный способ,
          который заставляет нас делать попытки выучить информацию снова и снова, тренируя ум как мышцы. </li>
          <li>Формула Интервального повторения Y=2X+1,
          где Y — день, когда информация начнёт забываться, забывание идет постепенно и равен Y дням, X — день последнего повторения после заучивания. </li>
          <li>
            При определении интервала, через который будет вновь показана карточка с изучаемым словом, учитывается сложность слова, выступающая в качестве коэффициента.
          </li>
          <li>Если слово помечено как "Простое", то коэффициент равен единице.</li>
          <li>Если слово помечено как "Среднее", то коэффициент равен двум.</li>
          <li>Если слово помечено как "Сложное", то коэффициент равен трем.</li>
          <li>Сложность слова определяеться с учётом изучения слов пользователем, результатов мини-игр, определения пользователем индивидуальной сложности изучаемого слова.</li>
        </ul>
        <h2>Интервальное повторение</h2>
        <div>
          <p>
            Идея, что интервальные повторения можно использовать для улучшения процесса обучения, впервые была предложена в книге
            «Психология обучения», написанной профессором Алеком Мейсом в 1932 году.
          </p>
          <p>
            В 1939-м Spitzer протестировал эффект методики на студентах в Айове.Spitzer исследовал метод на более чем 3600 студентах и доказал его эффективность.
          </p>
          <p>
            Но эта ранняя работа оставалась незамеченной до конца 60-х, когда когнитивные психологи, в особенности Landuaer, Bjork и Melton исследовали манипуляцию с
            интервалом повторения как способ улучшить запоминание.
          </p>
          <p>Примерно в то же время Пимслер стал первопроходцем в практическом применении теории интервальных повторений
          для обучения языков и в 1973-м Себастьян Лейтнер придумал «Систему Лейтнера», универсальную систему обучения, основанную на карточках.
          </p>
          <p>Подобная система обучения, эффективность которой доказана многочисленными исследованиями, используется в приложении.
          </p>
        </div>
      </article>
    </section>
  </div >
);

export default Promo;
