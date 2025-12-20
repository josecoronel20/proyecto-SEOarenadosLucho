const fs = require('fs');
const path = require('path');

const proyectosDir = path.join(__dirname, '..', 'public', 'images', 'proyectos');

// Función para normalizar ubicaciones
function normalizeLocation(location) {
  const locationMap = {
    'pilar': 'pilar',
    'zona-norte': 'zona-norte',
    'zona-oeste': 'zona-oeste',
    'san-isidro': 'san-isidro',
    'tigre': 'tigre',
    'ituzaingo': 'ituzaingo',
    'moreno': 'moreno',
    'moron': 'moron',
    'lujan': 'lujan',
    'san-martin': 'san-martin',
    'vicente-lopez': 'vicente-lopez',
    'zarate': 'zarate',
    'general-rodriguez': 'general-rodriguez',
    'cardales': 'cardales',
    'jose-c-paz': 'jose-c-paz',
    'san-miguel': 'san-miguel'
  };
  
  const normalized = location.toLowerCase().replace(/\s+/g, '-');
  return locationMap[normalized] || normalized;
}

// Función para extraer información del nombre actual
function parseFileName(filename) {
  const ext = path.extname(filename);
  const nameWithoutExt = filename.replace(ext, '');
  const parts = nameWithoutExt.split('-');
  
  let categoria = 'otro';
  let elemento = '';
  let ubicacion = '';
  let momento = '';
  
  // Detectar momento (antes/despues)
  if (parts.includes('antes')) {
    momento = 'antes';
  } else if (parts.includes('despues')) {
    momento = 'despues';
  }
  
  // Lista de ubicaciones conocidas
  const ubicaciones = ['pilar', 'zona-norte', 'zona-oeste', 'san-isidro', 'tigre', 
                       'ituzaingo', 'moreno', 'moron', 'lujan', 'san-martin', 
                       'vicente-lopez', 'zarate', 'general-rodriguez', 'cardales', 
                       'jose-c-paz', 'san-miguel'];
  
  // Extraer ubicación primero
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (ubicaciones.includes(part) || 
        (i < parts.length - 1 && ubicaciones.includes(part + '-' + parts[i + 1]))) {
      if (i < parts.length - 1 && ubicaciones.includes(part + '-' + parts[i + 1])) {
        ubicacion = normalizeLocation(part + '-' + parts[i + 1]);
      } else {
        ubicacion = normalizeLocation(part);
      }
      break;
    }
  }
  
  // Detectar categoría y elemento
  if (parts.includes('pileta') || parts.includes('piscina')) {
    categoria = 'pileta';
    // Extraer elemento (escalera, piso, etc.)
    if (parts.includes('escalera')) elemento = 'escalera';
    else if (parts.includes('piso')) elemento = 'piso';
    else if (parts.includes('piscina')) elemento = 'piscina';
    // Si no hay elemento específico, no agregar elemento
  } else if (parts.includes('vehiculo') || parts.includes('auto') || parts.includes('camion') || 
             parts.includes('chasis') || parts.includes('casa-rodante') || parts.includes('camiones')) {
    categoria = 'vehiculo';
    // Extraer elemento específico
    if (parts.includes('auto')) elemento = 'auto';
    else if (parts.includes('chasis')) elemento = 'chasis';
    else if (parts.includes('casa-rodante')) elemento = 'casa-rodante';
    else if (parts.includes('camion') || parts.includes('camiones')) {
      elemento = 'camion';
      // Si hay "chapa" en el nombre, agregarlo al elemento
      if (parts.includes('chapa')) elemento = 'camion-chapa';
    } else elemento = 'vehiculo';
  } else if (parts.includes('mueble')) {
    categoria = 'madera';
    if (parts.includes('mesa')) elemento = 'mesa';
    else elemento = 'mueble';
  } else if (parts.includes('tanque')) {
    categoria = 'industrial';
    elemento = 'tanque';
  } else if (parts.includes('estructura-metalica')) {
    categoria = 'metal';
    elemento = 'estructura';
  } else if (parts.includes('superficie-metalica')) {
    categoria = 'metal';
    if (parts.includes('llanta')) elemento = 'llanta';
    else elemento = 'superficie';
  } else if (parts.includes('fachada') || parts.includes('edificios') || parts.includes('barco')) {
    categoria = 'otro';
    if (parts.includes('fachada')) {
      // Extraer tipo de fachada
      if (parts.includes('frente')) elemento = 'frente';
      else if (parts.includes('pared')) {
        if (parts.includes('paredon')) elemento = 'paredon';
        else elemento = 'pared';
      }
      else if (parts.includes('columna')) elemento = 'columna';
      else if (parts.includes('techo')) elemento = 'techo';
      else if (parts.includes('piso')) elemento = 'piso';
      else if (parts.includes('rejas')) elemento = 'rejas';
      else elemento = 'fachada';
    } else if (parts.includes('edificios')) {
      elemento = 'edificios';
    } else if (parts.includes('barco')) {
      elemento = 'barco';
    }
  }
  
  return { categoria, elemento, ubicacion, momento, ext, originalParts: parts };
}

// Función para generar nuevo nombre
function generateNewName(parsed) {
  const { categoria, elemento, ubicacion, momento, ext } = parsed;
  
  let newName = `arenado-${categoria}`;
  
  if (elemento) {
    newName += `-${elemento}`;
  }
  
  if (ubicacion) {
    newName += `-${ubicacion}`;
  }
  
  newName += `-${momento}${ext}`;
  
  return newName;
}

// Función principal
function renameFiles() {
  const files = fs.readdirSync(proyectosDir);
  const renameMap = [];
  const nameCounts = new Map();
  
  files.forEach(file => {
    const oldPath = path.join(proyectosDir, file);
    const stat = fs.statSync(oldPath);
    
    if (stat.isFile()) {
      const parsed = parseFileName(file);
      let newName = generateNewName(parsed);
      
      // Manejar conflictos de nombres
      if (nameCounts.has(newName)) {
        nameCounts.set(newName, nameCounts.get(newName) + 1);
        const count = nameCounts.get(newName);
        const ext = parsed.ext;
        const nameWithoutExt = newName.replace(ext, '');
        newName = `${nameWithoutExt}-${count}${ext}`;
      } else {
        nameCounts.set(newName, 1);
      }
      
      if (file !== newName) {
        renameMap.push({
          old: file,
          new: newName,
          parsed
        });
      }
    }
  });
  
  // Mostrar cambios propuestos
  console.log('Archivos a renombrar:');
  console.log('====================');
  renameMap.forEach(({ old, new: newName, parsed }) => {
    console.log(`${old}`);
    console.log(`  → ${newName}`);
    console.log(`  [${parsed.categoria}] ${parsed.elemento || 'N/A'} - ${parsed.ubicacion || 'N/A'} - ${parsed.momento}`);
    console.log('');
  });
  
  // Ejecutar renombrado
  console.log(`\nRenombrando ${renameMap.length} archivos...`);
  renameMap.forEach(({ old, new: newName }) => {
    const oldPath = path.join(proyectosDir, old);
    const newPath = path.join(proyectosDir, newName);
    
    try {
      fs.renameSync(oldPath, newPath);
      console.log(`✓ ${old} → ${newName}`);
    } catch (error) {
      console.error(`✗ Error renombrando ${old}:`, error.message);
    }
  });
  
  console.log('\n¡Renombrado completado!');
}

// Ejecutar
renameFiles();

