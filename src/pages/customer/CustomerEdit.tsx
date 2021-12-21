import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import searchCustomers, { removeCustomer, saveCustomer, searchCustomerById } from './CustomerApi'
// import ExploreContainer from '../../components/ExploreContainer';

const CustomerEdit: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string; }>();

    const [customer, setCustomer] = useState<any>({});
    const history = useHistory();
    useEffect(() => {
        search();
    }, []);


    const search = () => {
        if (id !== 'new') {
            let result = searchCustomerById(id);
            console.log(result.email);
            setCustomer(result);
        }else{
            setCustomer({});
        }
        console.log("EDIT: "+customer);
    }

    const save = () => {
        saveCustomer(customer);
        history.push('/page/customers');
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
                        <IonTitle>{id === 'new' ? 'Agregar Cliente' : 'Editar Cliente'}</IonTitle>

                        <form method='POST'>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">Nombre</IonLabel>
                                        <IonInput
                                            required
                                            placeholder="Enter Input"
                                            onIonChange={e => customer.firstname = e.detail.value}
                                            value={customer.firstname}
                                        >
                                        </IonInput>
                                    </IonItem>
                                </IonCol>

                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">Apellido</IonLabel>
                                        <IonInput
                                            required
                                            onIonChange={e => customer.lastname = e.detail.value}
                                            value={customer.lastname}>
                                        </IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">Email</IonLabel>
                                        <IonInput
                                            type='email'
                                            onIonChange={e => customer.email = e.detail.value}
                                            value={customer.email}>
                                        </IonInput>
                                    </IonItem>
                                </IonCol>

                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">Dirección</IonLabel>
                                        <IonInput
                                            onIonChange={e => customer.address = e.detail.value}
                                            value={customer.address}>
                                        </IonInput>
                                    </IonItem>
                                </IonCol>

                            </IonRow>

                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="stacked">Teléfono</IonLabel>
                                        <IonInput

                                            onIonChange={e => customer.phone = e.detail.value}
                                            value={customer.phone}>
                                        </IonInput>
                                    </IonItem>
                                </IonCol>

                                <IonCol>
                                </IonCol>

                            </IonRow>

                            <IonItem>
                                <IonButton onClick={save} color='success' fill='solid' slot='end' size='default'>
                                    <IonIcon icon={checkmark} />
                                    Guardar
                                </IonButton>
                            </IonItem>
                        </form>


                    </IonCard>





                </IonContent>

            </IonContent>
        </IonPage>
    );
};

export default CustomerEdit;
