import React from 'react';
import config from '../config';

interface LoaderIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LoaderIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/loader)
 * @see {@link https://clicons.dev/icon/loader}
 */
const LoaderIcon = React.forwardRef<SVGSVGElement, LoaderIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21 12C20.9999 13.9005 20.3981 15.7523 19.2809 17.2899C18.1637 18.8274 16.5885 19.9719 14.7809 20.5591C12.9733 21.1464 11.0262 21.1463 9.21864 20.559C7.41109 19.9716 5.83588 18.8271 4.71876 17.2895C3.60165 15.7518 2.99999 13.9 3 11.9994C3.00001 10.0989 3.60171 8.24706 4.71884 6.70945C5.83598 5.17184 7.4112 4.02736 9.21877 3.44003C11.0263 2.8527 12.9734 2.85267 14.781 3.43995'
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

LoaderIcon.displayName = 'LoaderIcon';
export default LoaderIcon;
