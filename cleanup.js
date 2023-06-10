const fs = require("fs");
const path = require("path");

const foldersToDelete = ["src/app", "src/app/styles"];

function deleteFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const filePath = path.join(folderPath, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        deleteFolder(filePath);
      } else {
        fs.unlinkSync(filePath);
      }
    });
    fs.rmdirSync(folderPath);
    console.log(`${folderPath} folder deleted successfully.`);
  }
}

foldersToDelete.forEach((folderName) => {
  const folderPath = path.join(__dirname, folderName);
  deleteFolder(folderPath);
});
