import React from 'react';
import config from '../config';

interface ScreenLockRotationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ScreenLockRotationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/screen-lock-rotation)
 * @see {@link https://clicons.dev/icon/screen-lock-rotation}
 */
const ScreenLockRotationIcon = React.forwardRef<SVGSVGElement, ScreenLockRotationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.0339 3.74684C11.735 3.60141 11.4456 3.52354 11.1423 3.51237C10.0481 3.47207 9.20024 4.31523 7.50449 6.00155C5.80873 7.68786 4.96085 8.53102 5.00138 9.61906C5.0419 10.7071 5.955 11.6151 7.7812 13.4311L11.1017 16.7332C12.9279 18.5492 13.841 19.4573 14.9352 19.4975C16.0293 19.5378 16.8772 18.6947 18.5729 17.0084C19.9404 15.6485 20.7565 14.8369 21 14.0031'
    }
  ],
  [
    'path',
    {
      d: 'M2.99999 12.5042C3.1182 15.3761 4.97783 20.9955 11.3699 21.4774C11.7462 21.5058 11.9344 21.5199 11.9883 21.406C12.0423 21.292 11.9063 21.1598 11.6344 20.8955L10.4137 19.7092'
    }
  ],
  [
    'path',
    {
      d: 'M15.7365 5.67839L15.7365 4.28742C15.7365 4.08196 15.7451 3.87395 15.8187 3.68209C16.0148 3.17138 16.5341 2.50232 17.4796 2.50232C18.4251 2.50232 18.9648 3.17138 19.1609 3.68209C19.2345 3.87395 19.2431 4.08196 19.2431 4.28742L19.2431 5.67839M15.806 11.5039H19.194C20.1914 11.5039 21 10.6969 21 9.70151V7.69927C21 6.70385 20.1914 5.89691 19.194 5.89691H15.806C14.8086 5.89691 14 6.70385 14 7.69927V9.70151C14 10.6969 14.8086 11.5039 15.806 11.5039Z'
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

ScreenLockRotationIcon.displayName = 'ScreenLockRotationIcon';
export default ScreenLockRotationIcon;
