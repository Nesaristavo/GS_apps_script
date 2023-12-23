//This App Script for Google Sheets allows you to determine the author of the last edit in a specified cell

function getLastEditAuthor() {
   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
   var range = sheet.getRange('V5'); // Replace 'A1' with your cell address
   var lastEdit = range.getA1Notation();
   Logger.log('Last change in cell ' + lastEdit);
   var lastEditor = range.getRichTextValue().getLinkUrl(); // Get the ID of the author of the last change

   if (lastEditor) {
     Logger.log('The last change in the cell ' + lastEdit + ' was made by user ID: ' + lastEditor);
   } else {
     Logger.log('Last change author ID not found');
   }
}
