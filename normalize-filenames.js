import fs from 'fs';
import path from 'path';

// Función para convertir nombres a kebab-case
function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')    // Reemplaza espacios con guiones
    .replace(/--+/g, '-')    // Reemplaza múltiples guiones con uno solo
    .replace(/[^\w-]/g, ''); // Elimina caracteres especiales excepto guiones
}

// Función para renombrar un archivo
function renameFile(oldPath, directory) {
  const fileName = path.basename(oldPath);
  const fileExt = path.extname(fileName);
  const baseName = path.basename(fileName, fileExt);
  
  // Convertir el nombre base a kebab-case
  const newBaseName = toKebabCase(baseName);
  const newFileName = `${newBaseName}${fileExt}`;
  const newPath = path.join(directory, newFileName);
  
  // Si el nombre ya está normalizado, no hacer nada
  if (fileName === newFileName) {
    return { oldPath, newPath: oldPath, changed: false };
  }
  
  fs.renameSync(oldPath, newPath);
  return { oldPath, newPath, changed: true };
}

// Función para procesar recursivamente un directorio
function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  const renamedFiles = [];
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      // Si el directorio tiene espacios, renombrar primero el directorio
      if (file.includes(' ')) {
        const newDirName = toKebabCase(file);
        const newDirPath = path.join(directory, newDirName);
        fs.renameSync(filePath, newDirPath);
        console.log(`Renamed directory: ${filePath} -> ${newDirPath}`);
        
        // Luego procesar su contenido
        const nestedResults = processDirectory(newDirPath);
        renamedFiles.push(...nestedResults);
      } else {
        // Procesar el directorio sin renombrarlo
        const nestedResults = processDirectory(filePath);
        renamedFiles.push(...nestedResults);
      }
    } else {
      // Renombrar el archivo si es necesario
      const result = renameFile(filePath, directory);
      if (result.changed) {
        renamedFiles.push(result);
        console.log(`Renamed file: ${result.oldPath} -> ${result.newPath}`);
      }
    }
  }
  
  return renamedFiles;
}

// Directorios a procesar
const directories = [
  path.join(__dirname, 'public', 'images'),
  path.join(__dirname, 'public', 'clients'),
  path.join(__dirname, 'public', 'projects'),
  path.join(__dirname, 'public', 'videos'),
];

// Procesar cada directorio
let totalRenamed = 0;
const allRenamedFiles = [];

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    const renamedFiles = processDirectory(dir);
    totalRenamed += renamedFiles.length;
    allRenamedFiles.push(...renamedFiles);
  } else {
    console.log(`Directory does not exist: ${dir}`);
  }
});

// Guardar un registro de los archivos renombrados
const logFile = path.join(__dirname, 'renamed-files.json');
fs.writeFileSync(logFile, JSON.stringify(allRenamedFiles, null, 2));

console.log(`Total renamed files: ${totalRenamed}`);
console.log(`Log saved to: ${logFile}`);
