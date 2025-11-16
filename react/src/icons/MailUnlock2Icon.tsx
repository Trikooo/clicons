import React from 'react';
import config from '../config';

interface MailUnlock2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MailUnlock2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mail-unlock2)
 * @see {@link https://clicons.dev/icon/mail-unlock2}
 */
const MailUnlock2Icon = React.forwardRef<SVGSVGElement, MailUnlock2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 19.5C11.0345 19.5 10.0691 19.4878 9.09883 19.4634C5.95033 19.3843 4.37608 19.3448 3.24496 18.2094C2.11383 17.0739 2.08114 15.5412 2.01577 12.4756C1.99475 11.4899 1.99474 10.5101 2.01576 9.52438C2.08114 6.45885 2.11382 4.92608 3.24495 3.79065C4.37608 2.65521 5.95033 2.61566 9.09882 2.53656C11.0393 2.48781 12.9607 2.48781 14.9012 2.53657C18.0497 2.61568 19.6239 2.65523 20.7551 3.79066C21.8862 4.92609 21.9189 6.45886 21.9842 9.52439C21.9947 10.0172 22 10.0086 22 10.5'
    }
  ],
  [
    'path',
    {
      d: 'M16.5312 15.86V14.4523C16.5312 13.3741 17.4127 12.5 18.5 12.5C18.9887 12.5 19.4359 12.6766 19.7801 12.969M17.8438 21.5H19.1562C20.1777 21.5 20.6884 21.5 21.0749 21.2951C21.3802 21.1333 21.6302 20.8854 21.7934 20.5827C22 20.1993 22 19.6929 22 18.68C22 17.6671 22 17.1607 21.7934 16.7773C21.6302 16.4746 21.3802 16.2267 21.0749 16.0649C20.6884 15.86 20.1777 15.86 19.1562 15.86H17.8438C16.8223 15.86 16.3116 15.86 15.9251 16.0649C15.6198 16.2267 15.3698 16.4746 15.2066 16.7773C15 17.1607 15 17.6671 15 18.68C15 19.6929 15 20.1993 15.2066 20.5827C15.3698 20.8854 15.6198 21.1333 15.9251 21.2951C16.3116 21.5 16.8223 21.5 17.8438 21.5Z'
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

MailUnlock2Icon.displayName = 'MailUnlock2Icon';
export default MailUnlock2Icon;
