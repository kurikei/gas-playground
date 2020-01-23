function doGet() {
  const threads = GmailApp.search('[dアカウント]2段階認証');
  const firstThread = threads[0];
  const messages = firstThread.getMessages();
  const latestMessage = messages[messages.length - 1];
  const securityCode = latestMessage.getBody().match(/\[セキュリティコード\]([0-9]+)/)[1];

  return ContentService.createTextOutput(securityCode);
}
