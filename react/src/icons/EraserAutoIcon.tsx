import React from 'react';
import config from '../config';

interface EraserAutoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name EraserAutoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/eraser-auto)
 * @see {@link https://clicons.dev/icon/eraser-auto}
 */
const EraserAutoIcon = React.forwardRef<SVGSVGElement, EraserAutoIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.0352 12.0885L9.11997 15.0192C7.70666 16.44 7 17.1504 7 18.0354C7 18.9204 7.70666 19.6308 9.11997 21.0516L9.45083 21.3842C9.75311 21.6881 9.90425 21.84 10.0959 21.92C10.2875 22 10.5003 22 10.9261 22H13.1444C13.5701 22 13.7829 22 13.9746 21.92C14.1662 21.84 14.3173 21.6881 14.6196 21.3842L17.9507 18.0354M12.0352 12.0885L14.0318 10.0813C15.4067 8.69915 16.0941 8.00807 16.9454 8.00009C16.9583 7.99997 16.9712 7.99997 16.9842 8.00009C17.8355 8.00807 18.5229 8.69915 19.8978 10.0813C21.2938 11.4848 21.9919 12.1865 21.9999 13.0598C22 13.073 22 13.0863 21.9999 13.0995C21.9919 13.9728 21.2938 14.6745 19.8978 16.078L17.9507 18.0354M12.0352 12.0885L17.9507 18.0354'
    }
  ],
  [
    'path',
    {
      d: 'M9 9L7.5 5.5M7.5 5.5L6.18393 2.42917C6.1474 2.34393 6.12913 2.30131 6.10602 2.26511C6.01746 2.12637 5.86628 2.0315 5.69393 2.00652C5.64897 2 5.59931 2 5.5 2C5.40069 2 5.35103 2 5.30607 2.00652C5.13372 2.0315 4.98254 2.12637 4.89398 2.26511C4.87087 2.30131 4.8526 2.34393 4.81607 2.42917L3.5 5.5M7.5 5.5L3.5 5.5M3.5 5.5L2 9'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

EraserAutoIcon.displayName = 'EraserAutoIcon';
export default EraserAutoIcon;
