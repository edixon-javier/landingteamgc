#!/bin/bash

# Crear un directorio para la nueva estructura
mkdir -p temp_assets/{images,projects,videos}

# Copiar y renombrar archivos de imágenes
for file in public/images/*; do
  if [ -f "$file" ]; then
    # Obtener el nombre base del archivo
    basename=$(basename "$file")
    # Convertir a minúsculas y reemplazar espacios con guiones
    newname=$(echo "$basename" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/--/-/g')
    # Copiar al directorio temporal
    cp "$file" "temp_assets/images/$newname"
    echo "Copiado $file a temp_assets/images/$newname"
  fi
done

# Copiar y renombrar archivos de proyectos
for dir in public/projects/*; do
  if [ -d "$dir" ]; then
    # Obtener el nombre base del directorio
    dirname=$(basename "$dir")
    # Convertir a minúsculas y reemplazar espacios con guiones
    newdirname=$(echo "$dirname" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/--/-/g')
    # Crear el directorio en temp
    mkdir -p "temp_assets/projects/$newdirname"
    
    # Procesar archivos en el directorio
    for file in "$dir"/*; do
      if [ -f "$file" ]; then
        # Obtener el nombre base del archivo
        basename=$(basename "$file")
        # Convertir a minúsculas y reemplazar espacios con guiones
        newname=$(echo "$basename" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/--/-/g')
        # Copiar al directorio temporal
        cp "$file" "temp_assets/projects/$newdirname/$newname"
        echo "Copiado $file a temp_assets/projects/$newdirname/$newname"
      fi
    done
  fi
done

# Copiar y renombrar archivos de videos
for file in public/videos/*; do
  if [ -f "$file" ]; then
    # Obtener el nombre base del archivo
    basename=$(basename "$file")
    # Convertir a minúsculas y reemplazar espacios con guiones
    newname=$(echo "$basename" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/--/-/g')
    # Copiar al directorio temporal
    cp "$file" "temp_assets/videos/$newname"
    echo "Copiado $file a temp_assets/videos/$newname"
  fi
done

# Copiar otros archivos de la raíz de public
for file in public/*.svg public/.nojekyll; do
  if [ -f "$file" ]; then
    cp "$file" "temp_assets/"
    echo "Copiado $file a temp_assets/"
  fi
done

echo "Proceso completado. Revisa el directorio temp_assets para verificar los resultados."
