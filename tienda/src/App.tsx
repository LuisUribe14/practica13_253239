import { useState } from 'react';
import { Catalogo } from './Catalogo';
import { productos } from './datos';
import { Encabezado } from './Encabezado';
import { Layout } from './Layout';
import { PiePagina } from './PiePagina';
import { Filtros } from './Filtros';

import type { Producto } from './datos';

const categorias = [
  'todas',
  ...new Set(productos.map((p) => p.categoria))
];

function App() {

  const [categoria, setCategoria] =
    useState('todas');

  const [carrito, setCarrito] =
    useState<Producto[]>([]);

  const productosVisibles =
    categoria === 'todas'
      ? productos
      : productos.filter(
          (p) => p.categoria === categoria
        );

  function agregarAlCarrito(
    producto: Producto
  ) {

    setCarrito((anterior) => [
      ...anterior,
      producto
    ]);
  }


  const piezas =
    carrito.length;


  const total =
    carrito.reduce(
      (acumulado, producto) =>
        acumulado + producto.precio,
      0
    );

  return (

    <Layout

      encabezado={
        <Encabezado
          piezas={piezas}
        />
      }

      pie={
        <PiePagina
          piezas={piezas}
          total={total}
        />
      }

    >

      <section className="portada">

        <h1>
          Catálogo de temporada
        </h1>

        <Filtros
          categorias={categorias}
          activa={categoria}
          onCambiar={setCategoria}
        />

        <Catalogo
          productos={productosVisibles}
          onAgregar={agregarAlCarrito}
        />

      </section>

    </Layout>

  );
}

export default App;