import React from 'react';
import config from '../config';

interface RotateRight4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RotateRight4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rotate-right4)
 * @see {@link https://clicons.dev/icon/rotate-right4}
 */
const RotateRight4Icon = React.forwardRef<SVGSVGElement, RotateRight4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.8517 11.9194C19.4749 11.5654 20.2778 11.7864 20.6452 12.4132C21.0125 13.0399 20.8052 13.835 20.182 14.1891L18.6776 15.0439M18.8517 11.9194L20.3561 11.0646C20.9793 10.7105 21.1867 9.91547 20.8193 9.28871C20.452 8.66196 19.649 8.44091 19.0258 8.79499L17.8976 9.43626M18.8517 11.9194L14.7145 14.2702M18.6776 15.0439C19.3007 14.6899 20.1037 14.9109 20.4711 15.5377C20.8384 16.1644 20.631 16.9595 20.0079 17.3136L15.369 19.9494C13.7342 20.8783 12.9168 21.3427 12.1192 21.462C11.6565 21.5313 10.9504 21.4215 10.4229 21.3127C9.96658 21.2186 9.48965 21.273 9.08964 21.5003L8.21362 21.998M18.6776 15.0439L15.2926 16.9673M17.8976 9.43626C18.5204 9.08205 18.7276 8.28717 18.3603 7.66058C17.9929 7.03382 17.19 6.81278 16.5668 7.16685L10.2016 10.7833L10.7057 8.86278C10.9269 8.02011 10.3587 7.16195 9.48775 7.02339C8.82135 6.91736 8.17424 7.27166 7.91452 7.88474L6.05187 12.5734C5.6955 13.4705 4.84142 14.3331 4.00098 14.8107M17.8976 9.43626L14.1365 11.5733'
    }
  ],
  [
    'path',
    {
      d: 'M14.6362 4.96465C14.2393 5.3603 12.5127 5.24616 11.8758 5.16671M14.6362 4.96465C15.0331 4.56901 15.0445 2.63697 14.9648 2.00208M14.6362 4.96465C13.6152 3.19642 9.55562 0.375875 5.52724 3.19642C3.58057 4.55942 3.30588 5.41838 2.99804 5.99381'
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

RotateRight4Icon.displayName = 'RotateRight4Icon';
export default RotateRight4Icon;
