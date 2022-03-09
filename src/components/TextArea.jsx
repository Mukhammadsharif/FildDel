import React from 'react'
import { View, StyleSheet, TextInput, Text, Dimensions } from 'react-native'
import { Field } from 'formik'
import { COLORS } from '../utils/colors'

export default function TextArea({
    label,
    name,
    validate,
    keyboard,
    style,
    placeholder,
    placeholderTextColor,
    numberOfLines,
    multiline,
    maxLength,
    attributes,
    onChange,
}) {
    return (
        <View>
            {label ? <Text style={styles.label}>{label}</Text> : null}

            <Field name={name} validate={validate}>
                {({ field, form }) => (
                    <View style={styles.textAreaContainer}>
                        <TextInput
                            style={{ ...styles.textArea, ...style }}
                            keyboardType={keyboard}
                            placeholder={placeholder}
                            maxLength={maxLength}
                            placeholderTextColor={placeholderTextColor}
                            numberOfLines={numberOfLines}
                            multiline={multiline}
                            onChangeText={(value) => {
                                form.setFieldValue(name, value)
                                if (typeof onChange === 'function') onChange(value)
                            }}
                            value={String(field.value || '') || ''}
                            {...attributes} />
                    </View>
                )}
            </Field>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 5,
        letterSpacing: 0.5,
    },
    textAreaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingLeft: 25,
        paddingRight: 20,
        backgroundColor: COLORS.inputBackgroundColor,
        marginTop: 5,
        flex: 1,
    },
    textArea: {
        width: '100%',
        minHeight: 100,
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        color: '#686866',
        fontSize: 14,
        fontFamily: 'Helvetica',
        // flex: 1
    },
})
