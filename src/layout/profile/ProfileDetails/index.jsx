// styling
import styles from './style.module.scss';

// components
import LazyImage from '@components/LazyImage';
import {toast} from 'react-toastify';
import GradientBtn from '@ui/GradientBtn';
import StyledProgress from '@ui/StyledProgress';

// hooks
import {useRef, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import useFileReader from '@hooks/useFileReader';

// utils
import classNames from 'classnames';

// assets
import cover from '@assets/cover.webp';

const ProfileDetails = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {file, setFile, handleFile, loading} = useFileReader();
    const inputRef = useRef(null);

    const triggerInput = () => inputRef.current?.click();

    const setPlaceholder = () => setFile(cover);

    const handleDelete = () => {
        setPlaceholder();
        toast.info('Cover photo was successfully deleted.');
    };

    const onSubmit = () => {
        toast.info('Profile details updated successfully!');
    }

    useEffect(() => {
        setPlaceholder();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={`${styles.wrapper} border-10`}>
            <div className={`${styles.cover} border-10`}>
                <LazyImage className={styles.cover_bg} src={file ? file : cover} alt="cover"/>
                <span className={styles.cover_overlay}>
                    <GradientBtn tag="button" onClick={triggerInput}>Upload cover</GradientBtn>
                    {
                        file !== cover && (
                            <button className="btn btn--outline btn--outline-dark" onClick={handleDelete}>
                                Delete
                            </button>
                        )
                    }
                </span>
                {loading && <StyledProgress visible isOverlay />}
            </div>
            <div className="d-flex flex-column g-20">
                <h5 >Personal Information</h5>
                <form className="d-flex flex-column g-40" onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex flex-column g-20">
                        <div className={styles.group}>
                            <input type="file" ref={inputRef} onChange={handleFile} hidden/>
                            <input className={classNames('field field--outline', {'field--error': errors.firstName})}
                                   type="text"
                                   defaultValue="Rebecca"
                                   placeholder="First name"
                                   {...register('firstName', {required: true})}/>
                            <input className={classNames('field field--outline', {'field--error': errors.lastName})}
                                   type="text"
                                   defaultValue="Jackson"
                                   placeholder="Last name"
                                   {...register('lastName', {required: true})}/>
                            <input className={classNames('field field--outline', {'field--error': errors.email})}
                                   type="text"
                                   placeholder="Email"
                                   {...register('email', {required: false, pattern: /^\S+@\S+$/i})} />
                            <input className={classNames('field field--outline', {'field--error': errors.phone})}
                                   type="text"
                                   placeholder="Phone number"
                                   {...register('phone', {required: false, pattern: /^\d{10}$/})} />
                        </div>
                        <input className={classNames('field field--outline', {'field--error': errors.url})}
                               type="text"
                               placeholder="Custom URL"
                               {...register('url', {
                                   required: false,
                                   pattern: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
                               })} />
                        <textarea className={`${styles.textarea} field field--outline`} placeholder="Enter your bio"
                                  {...register('bio', {required: false})} />
                    </div>
                    <div className={styles.buttons}>
                        <GradientBtn tag="button" type="submit">Update profile</GradientBtn>
                        <button className="btn btn--outline">Preview</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileDetails