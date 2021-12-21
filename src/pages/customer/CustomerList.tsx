import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import ExploreContainer from '../../components/ExploreContainer';

const CustormerList: React.FC = () => {

    const { name } = useParams<{ name: string; }>();

    const [clientes, setClientes] = useState<any>([]);

    useEffect(() => {
        search();
    }, []);

    const search = () => {
        const datosDeEjemplo = [
            {
                id: '1',
                firstname: 'Germán',
                lastname: 'Ortiz',
                email: 'er@gmail.com',
                phone: '515151',
                address: 'Av 12'
            },
            {
                id: '2',
                firstname: 'Ilda',
                lastname: 'Martinez',
                email: 'er@gmail.com',
                phone: '123123',
                address: 'K 18'
            }
        ];
        setClientes(datosDeEjemplo);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>



                <IonContent>
                    <IonCard>
                        <IonTitle>Gestión de Clientes</IonTitle>

                        <IonItem>
                            <IonButton color='primary' fill='solid' slot='end' size='default'>
                                <IonIcon icon={add} />
                                Agregar Cliente
                            </IonButton>
                        </IonItem>

                        <IonGrid className="table">
                            <IonRow>
                                <IonCol>Nombre</IonCol>
                                <IonCol>Email</IonCol>
                                <IonCol>Teléfono</IonCol>
                                <IonCol>Dirección</IonCol>
                                {/* Eliminar, Modificar */}
                                <IonCol>Acciones</IonCol>
                            </IonRow>

                            {clientes.map((cliente:any) =>
                                <IonRow>
                                    <IonCol>{cliente.firstname} {cliente.lastname}</IonCol>
                                    <IonCol>{cliente.email}</IonCol>
                                    <IonCol>{cliente.phone}</IonCol>
                                    <IonCol>{cliente.address}</IonCol>
                                    <IonCol>
                                        <IonButton color="primary" fill='clear'>
                                            <IonIcon icon={pencil} slot='icon-only' />
                                        </IonButton>
                                        <IonButton color="danger" fill='clear'>
                                            <IonIcon icon={close} slot='icon-only' />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            )}




                        </IonGrid>
                    </IonCard>
                </IonContent>










            </IonContent>
        </IonPage>
    );
};

export default CustormerList;
