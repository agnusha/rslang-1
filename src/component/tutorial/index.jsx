import React from "react";
import { Component } from "react";

import "./styles.scss";

class Tutorial extends Component {
  render() {
    return (
      <div className="tutorial-wrapper">
        <p>
          Memorizer - приложение для изучения слов английского языка по методике
          интервального повторения.
        </p>
        <hr />
        <p>
          В приложении доступны различные настройки для более комфортного
          обучения: возможность повтора слов в текущем уроке, удаления слова из
          курса изучения, пропуска слова в текущем уроке. Эти опции можно
          включать/выключать в настройках приложения, доступных через боковое
          меню либо по нажатию на кнопку "Настройки" в самом приложении.
          Обратите внимание, что при изменении настроек во время учебного сеанса
          его прогресс будет сброшен и урок начнется заново.
        </p>
        <hr />
        <p>
          В настроках приложения можно активировать панель выбора сложности
          слов. Если панель не активирована, то сложность всех слов
          автоматически считается "Нормально". При активной панели выбор
          сложности является обязательным условием перехода к следующему слову.
          Пока сложность не выбрана, кнопка "Следующее слово" доступна не будет.
          При пропуске, удалении и повторе слова сложность не указывается.
          Удаление слова из курса обучения возмоно только если правильно его перевести.
        </p>
        <hr />
        <p>
          Приложение генерирует набор из старых и новых слов для урока на основе
          пользовательских предпочтений, указанных в настройках. Там же указывается
          сложность слов, необходимых для урока.
        </p>
        <hr />
        <p>Удачи в обучении!</p>
      </div>
    );
  }
}

export default Tutorial;
