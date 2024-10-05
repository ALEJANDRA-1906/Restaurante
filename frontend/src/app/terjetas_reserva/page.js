"use client";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/TarjetaReserva.module.css';

export default function TarjetaReserva() {
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    num_comensales: '',
    celebracion: '',
    mesa: null, // Aquí se guardará el ID de la mesa seleccionada
  });
  
  const [mesas, setMesas] = useState([]); // Estado para las mesas disponibles

  useEffect(() => {
    // Llama a tu API para obtener las mesas disponibles
    const fetchMesas = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/mesa/'); // Cambia la URL según tu API
        const data = await response.json();
        setMesas(data); // Supongamos que la respuesta es un array de mesas
      } catch (error) {
        console.error('Error al obtener las mesas:', error);
      }
    };

    fetchMesas();
  }, []);

  const handleCardClick = () => {
    setShowDateTimePicker(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Aquí es donde defines la función handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario
    try {
      const response = await fetch('http://127.0.0.1:8000/api/reservas/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          fecha: selectedDate.toISOString().split('T')[0], // Formato YYYY-MM-DD
          hora: selectedTime, // Mantén el formato de hora que estás usando
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error al guardar la reserva:', errorData);
        throw new Error('Error al guardar la reserva');
      }

      const data = await response.json();
      console.log('Reserva guardada:', data);
      // Aquí puedes agregar una notificación o redirigir al usuario a otra página
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const availableTimes = [
    "8:00am", "9:00am", "10:00", "11:00", 
    "12:00pm", "1:00pm", "2:00pm", "3:00pm", 
    "4:00pm", "5:00pm", "6:00pm", "7:00pm", 
    "8:00pm", "9:00pm"
  ];

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        {!showDateTimePicker && (
          <div className={styles.logoContainer}>
            <img src="/logo.png" alt="Logo del Restaurante" className={styles.logo} />
          </div>
        )}
        {!showDateTimePicker && (
          <div className={styles.description}>
            <h2>Bienvenido a Reservas Misku. Disfruta de una experiencia culinaria única.</h2>
          </div>
        )}

        {!showDateTimePicker && (
          <div className={styles.reservationContainer1}>
            <div id="reserveCard" className={styles.reserveCard1} onClick={handleCardClick}>
              <h2>Reservas Miski</h2>
              <p>Ven y reserva para disfrutar en familia</p>
              <p>Duración: 120 min</p>
              <p>Modalidad: Presencial</p>
            </div>
          </div>
        )}
      </div>

      {showDateTimePicker && (
        <div className={styles.fullscreenContainer}>
          <div className={styles.logoContainerHora}>
            <img src="/logo.png" alt="Logo alternativo" className={styles.logo} />
          </div>
          <div className={styles.descriptionHora}>
            <h2>Bienvenido a Reservas Misku. Disfruta de una experiencia culinaria única.</h2>
          </div>

          <div className={styles.dateTimePickerWrapper}>
            <div className={styles.datePickerContainer}>
              <h2>Selecciona fecha</h2>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                inline
              />
            </div>

            <div className={styles.timePickerContainer}>
              <h2>Selecciona una hora:</h2>
              <div className={styles.timeGrid}>
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    className={styles.timeButton}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {showForm && (
            <div className={styles.formOverlay}>
              <div className={styles.formCard}>
                <h2>Detalles de la Reserva</h2>
                <p>Fecha seleccionada: {selectedDate && selectedDate.toLocaleDateString()}</p>
                <p>Hora seleccionada: {selectedTime}</p>

                <form onSubmit={handleSubmit}>
                  <label>Número de comensales:</label>
                  <input className={styles.formInput} type="number" name="num_comensales" value={formData.num_comensales} onChange={handleChange} required />

                  <label>Nombre:</label>
                  <input className={styles.formInput} type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

                  <label>Apellido:</label>
                  <input className={styles.formInput} type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />

                  <label>Teléfono:</label>
                  <input className={styles.formInput} type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />

                  <label>Correo electrónico:</label>
                  <input className={styles.formInput} type="email" name="email" value={formData.email} onChange={handleChange} required />

                  <label>¿Qué van a celebrar?</label>
                  <input className={styles.formInput} type="text" name="celebracion" value={formData.celebracion} onChange={handleChange} required />

                  <label>Selecciona una mesa:</label>
                  <select className={styles.formInput} name="mesa" value={formData.mesa} onChange={handleChange} required>
                    <option value="">Selecciona una mesa</option>
                    {mesas.map(mesa => (
                      <option key={mesa.id} value={mesa.id}>
                        {mesa.nombre} (Mesa {mesa.id}) {/* Aquí puedes mostrar más detalles de la mesa si lo deseas */}
                      </option>
                    ))}
                  </select>

                  <div className={styles.buttonContainer}>
                    <button type="submit" className={styles.reserveButton}>Reservar</button>
                    <button type="button" className={styles.cancelButton} onClick={() => setShowForm(false)}>Cancelar</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
