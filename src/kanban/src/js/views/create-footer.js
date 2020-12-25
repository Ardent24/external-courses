const createFooter = app => {
  app.insertAdjacentHTML('beforeend', `
   <footer class="footer">
    <div class="footer-wrapper wrapper">
      <div class="footer-tasks">
        <p class="footer-txt">Active tasks:
          <span class="footer-txt__data active-task__js">N</span></p>
        <p class="footer-txt">Finished tasks:
          <span class="footer-txt__data finish-task__js">M</span></p>
      </div>
      <p class="footer-txt">Kanban Time <span class="footer-data"></span>
      </p>
    </div>
  </footer>
  `)
}

export {createFooter};
