import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import searchCustomers, { removeCustomer, saveCustomer } from './CustomerApi'
// import ExploreContainer from '../../components/ExploreContainer';

const CustormerList: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [clientes, setClientes] = useState<any>([]);
    const history = useHistory();

    useEffect(() => {
        search();
    }, [history.location.pathname]);

    const search = () => {        
        let result = searchCustomers();
        setClientes(result);
    }

    const remove = (id:string) =>{
        removeCustomer(id);
        search();
    }

    const addCustomer= () =>{
        history.push('/page/customers/new');
    }
    const editCustomer= (id:string) =>{
        history.push('/page/customers/'+id);
    }

    const pruebaLocalStorage = () =>{
        const ejemplo = {
            id: '1',
            firstname: 'Germán',
            lastname: 'Ortiz',
            emali: 'germ.ortiz@gmail.com',
            phone: '1231231',
            addres: 'Av 5'
        }
        saveCustomer(ejemplo);
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
                            <IonButton onClick={addCustomer} color='primary' fill='solid' slot='end' size='default'>
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
                                        <IonButton color="primary" fill='clear'
                                        onClick={() => editCustomer(cliente.id)}>
                                            <IonIcon icon={pencil} slot='icon-only' />
                                        </IonButton>
                                        <IonButton color="danger" fill='clear'
                                        onClick={()=> remove(cliente.id)}>
                                            <IonIcon icon={close} slot='icon-only' />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            )}




                        </IonGrid>
                    </IonCard>

                    <IonButton onClick={pruebaLocalStorage} color="danger" fill='clear'>
                                            Prueba Local Storage
                                        </IonButton>



                    
                </IonContent>










            </IonContent>
        </IonPage>
    );
};

export default CustormerList;
