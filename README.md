# Consigna Trabajo práctico integrador: 
## Aplicación CRUD Completa con Express, MySQL, Sequelize y Frontend con Vistas Interactivas


Objetivo
--------

Desarrollar una aplicación web CRUD completa que permita la gestión de usuarios y cursos, integrando una base de datos MySQL, Sequelize como ORM, y un frontend que represente la información de manera visual e interactiva. 

Este proyecto debe aplicar conocimientos de arquitectura por capas, diseño de interfaces, y buenas prácticas en desarrollo full-stack.

### Requerimientos de Frontend

**1\. Pagina principal**

*   Titulo del sitio
    
*   Menú de navegación que permita navegar por las diferentes secciones del sitio.
    
*   Debe contener una sección que muestre al menos 5 cursos de los que ofrece el sitio. **Plus:** cada vez que la página carga se deben mostrar 5 cursos diferentes
    

**2\. Vista de Usuarios**

*   **Listado de Usuarios**:
    
    *   Mostrar todos los usuarios en formato **tarjeta**, con la siguiente información:
        
        *   **Foto de perfil**
            
        *   **Nombre**
            
        *   **Curso asignado** (si corresponde)
            
        *   **Botón de asignación de curso**: Si el usuario no tiene curso asignado, incluir un botón para asignarlo.
            
    *   Agregar una opción de paginación para navegar entre los usuarios si hay un gran volumen de registros.
        

**3\. Vista de Cursos**

*   **Listado de Cursos**:
    
    *   Mostrar cada curso en formato **tarjeta**, con la siguiente información:
        
        *   **Nombre del curso**
            
        *   **Descripción del curso**
            
        *   **Botón de detalles** para ver la información completa del curso.
            
*   **Detalle de Curso**:
    
    *   Al acceder al detalle de un curso, mostrar:
        
        *   **Nombre del curso**
            
        *   **Descripción del curso**
            
        *   **Listado de alumnos inscritos** en formato de **tabla**, mostrando:
            
        *   Foto de perfil del alumno
            
        *   Nombre del alumno
            
        *   Email y teléfono del alumno (si es necesario)
            
    *   Incluir opción de paginación si el curso tiene un gran número de alumnos inscritos.
        

**3\. Formularios de Usuarios y Cursos**

*   **Formulario de Usuarios**:
    
    *   Permitir crear y editar usuarios con los campos necesarios (nombre, email, teléfono, imagen de perfil y asignación de curso).
        
    *   Validación de formulario en HTML y JavaScript para asegurar integridad de datos.
        
*   **Formulario de Cursos**:
    
    *   Crear y editar cursos con los campos: nombre y descripción.
        
    *   Validación de datos en frontend para asegurar que todos los campos obligatorios estén completados.
        

**4\. Diseño Responsivo**

*   Adaptar todas las vistas para que sean funcionales y estéticas en dispositivos móviles, tablets y desktops.
    

### Requerimientos de Backend

**1\. Estructura del Proyecto:**

#### API

*   **models**: Definir modelos Usuario y Curso en Sequelize, con sus relaciones.
    
*   **controllers**: Controladores para la lógica de negocio de usuarios y cursos.
    
*   **routes**: Rutas para manejar las operaciones CRUD y las vistas.
    
*   **config**: Configuración para la conexión con MySQL.
    
*   **public**: Archivos estáticos, incluyendo CSS, imágenes y JavaScript.(Para modelo SSR)
    

**2\. Base de Datos MySQL:**

*   Crear una base de datos curso\_db con las tablas:
    
    *   **Usuarios**:
        
        *   id (INT, autoincremental)
            
        *   nombre (VARCHAR)
            
        *   email (VARCHAR)
            
        *   telefono (VARCHAR)
            
        *   imagen (VARCHAR) - Ruta de la imagen de perfil
            
        *   cursoId (INT, clave foránea, opcional)
            
    *   **Cursos**:
        
        *   id (INT, autoincremental)
            
        *   nombre (VARCHAR)
            
        *   descripcion (TEXT)
            

**3\. CRUD Completo con Usuarios y Cursos:**

*   Implementar CRUD para ambas tablas:
    
    *   **Usuarios**: Crear, leer, actualizar y eliminar usuarios, incluyendo asignación de curso y subida de imagen.
        
    *   **Cursos**: Crear, leer, actualizar y eliminar cursos.
        
    *   Asegurar que la eliminación de un curso libere la asignación de curso para los usuarios que estaban inscritos.
        

**4\. Rutas CRUD Backend:**

*   Rutas para usuarios:
    
    *   POST /usuarios: Crear un nuevo usuario (con imagen y asignación de curso opcional).
        
    *   GET /usuarios: Obtener todos los usuarios, con paginación.
        
    *   PUT /usuarios/:id: Actualizar un usuario.
        
    *   DELETE /usuarios/:id: Eliminar un usuario.
        
*   Rutas para cursos:
    
    *   POST /cursos: Crear un curso.
        
    *   GET /cursos: Obtener todos los cursos.
        
    *   GET /cursos/:id: Obtener detalles del curso con su lista de alumnos.
        
    *   PUT /cursos/:id: Actualizar un curso.
        
    *   DELETE /cursos/:id: Eliminar un curso.
        

### Criterios de Evaluación

1.  **Funcionalidad Completa**:
    
    *   Correcta conexión y funcionamiento con la base de datos MySQL.
        
    *   Modelos de Usuario y Curso en Sequelize, incluyendo relaciones y métodos necesarios.
        
    *   Rutas CRUD funcionales para usuarios y cursos.
        
    *   Representación y visualización de datos en el frontend.
        
2.  **Validación de Datos**:
    
    *   Implementación de validación en frontend para todos los formularios.
        
3.  **Organización y Documentación**:
    
    *   Código organizado, usando la arquitectura por capas.
        
    *   Crear un archivo DOCUMENTATION.md donde se visualice:
        
        1.  Nombre del grupo.
            
        2.  Nombre y apellido de los integrantes.
            
        3.  Estructura del proyecto.
            
        4.  Comandos de instalación de las dependencias.
            
4.  **Diseño Responsivo y Usabilidad**:
    
    *   La aplicación debe ser responsiva y fácil de navegar.
        
    *   Paginación funcional en vistas de usuario y detalle de cursos.
